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
        _backImage.SetActive(false);
        _overlayGroup.blocksRaycasts = false;
        _overlayGroup.alpha = 0;
    }

    // Update is called once per frame
    void Update()
    {
        if (_fadeIn) {
            if (!_overlayGroup.blocksRaycasts) {
                _overlayGroup.blocksRaycasts = true;
            }
            if (!_backImage.activeSelf) {
                _backImage.SetActive(true);
            }
            if (_overlayGroup.alpha < 1) {
                _overlayGroup.alpha += Time.deltaTime * _fadeSpeed;
            }
        } else if (!_fadeIn) {
            if (_overlayGroup.alpha > 0) {
                _overlayGroup.alpha -= Time.deltaTime * _fadeSpeed;
            } else if (_overlayGroup.blocksRaycasts) {
                _overlayGroup.blocksRaycasts = false;
            }
        }
    }
}
