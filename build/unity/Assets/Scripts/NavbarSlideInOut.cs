using UnityEditor.Rendering;
using UnityEngine;
using UnityEngine.EventSystems;

public class NavbarSlideInOut : MonoBehaviour,IPointerEnterHandler,IPointerExitHandler
{
    [Header("Slide in and out")]
    [SerializeField] private bool _hover = false;
    [SerializeField] private bool _slideIn = false;
    [SerializeField] private float _speed = 50f;
    [SerializeField] private RectTransform _navUiRect;
    [SerializeField] private GameObject _navUiContainer;
    [SerializeField] private GameObject[] _buttons;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        _hover = true;
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        _hover = false;
    }

    void checkSlide() {
        if (_buttons[0].GetComponent<MouseIsHoveringOver>().isHovering()) {
            _slideIn = true;
        } else if (_buttons[1].GetComponent<MouseIsHoveringOver>().isHovering()) {
            _slideIn = true;
        } else if (_buttons[2].GetComponent<MouseIsHoveringOver>().isHovering()) {
            _slideIn = true;
        } else if (_buttons[3].GetComponent<MouseIsHoveringOver>().isHovering()) {
            _slideIn = true;
        } else if (_hover) {
            _slideIn = true;
        } else {
            _slideIn = false;
        }
    }

    void Update()
    {
        checkSlide();
        if (_slideIn) {
            Vector3 _move = Vector3.down * _speed;
            if (_navUiRect.anchoredPosition[1] > 0) {
                _navUiContainer.transform.Translate(_move * Time.deltaTime); 
            }
        }
        else if (!_slideIn) {
            Vector3 _move = Vector3.up * _speed;
            if (_navUiRect.anchoredPosition[1] < 110) {
                _navUiContainer.transform.Translate(_move * Time.deltaTime);
            }
        }
    }
}
