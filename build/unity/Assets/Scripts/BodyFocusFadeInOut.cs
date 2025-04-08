using Microsoft.Unity.VisualStudio.Editor;
using UnityEngine;

public class BodyFocusFadeInOut : MonoBehaviour
{

    [SerializeField]
    private CanvasGroup _overlayGroup;
    [SerializeField]
    private bool _fadeIn = false;
    [SerializeField]
    private float _fadeSpeed = 2f;

    [SerializeField]
    private GameObject _focus3DObject;
    
    [SerializeField]
    private Material _focus3DMaterial;
    [SerializeField]
    private GameObject _backImage;

    public void EnterFocus() {
        _fadeIn = true;
    }
    public void ExitFocus() {
        _fadeIn = false;
    }

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        _focus3DMaterial = _focus3DObject.GetComponent<MeshRenderer>().material;
        _focus3DObject.SetActive(false);
        _backImage.SetActive(false);
        _overlayGroup.blocksRaycasts = false;
        _overlayGroup.alpha = 0;
        Color tempColor = _focus3DMaterial.color;
        tempColor.a = 0;
        _focus3DMaterial.color = tempColor;
    }

    // Update is called once per frame
    void Update()
    {
        if (_fadeIn) {
            if (!_focus3DObject.activeSelf) {
                _focus3DObject.SetActive(true);
            }
            if (!_overlayGroup.blocksRaycasts) {
                _overlayGroup.blocksRaycasts = true;
            }
            if (!_backImage.activeSelf) {
                _backImage.SetActive(true);
            }
            if (_overlayGroup.alpha < 1) {
                _overlayGroup.alpha += Time.deltaTime * _fadeSpeed;
            }
            if (_focus3DMaterial.color.a < 1) {
                Color tempColor = _focus3DMaterial.color;
                tempColor.a += Time.deltaTime * _fadeSpeed;
                _focus3DMaterial.color = tempColor;
            }
        } else if (!_fadeIn) {
            if (_backImage.activeSelf) {
                _backImage.SetActive(false);
            }
            if (_overlayGroup.alpha > 0) {
                _overlayGroup.alpha -= Time.deltaTime * _fadeSpeed;
            } else if (_overlayGroup.blocksRaycasts) {
                _overlayGroup.blocksRaycasts = false;
            }
            if (_focus3DMaterial.color.a > 0) {
                Color tempColor = _focus3DMaterial.color;
                tempColor.a -= Time.deltaTime * _fadeSpeed;
                _focus3DMaterial.color = tempColor;
            } else if (_focus3DObject.activeSelf) {
                _focus3DObject.SetActive(false);
            }
        }
    }
}
