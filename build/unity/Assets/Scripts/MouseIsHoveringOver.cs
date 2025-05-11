using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class MouseIsHoveringOver : MonoBehaviour,IPointerEnterHandler,IPointerExitHandler
{
    [SerializeField] private bool hovering;
    public void OnPointerEnter(PointerEventData eventData)
    {
        hovering = true;
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        hovering = false;
    }

    public bool isHovering() {
        return hovering;
    }
}
