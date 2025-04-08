using TMPro;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.Video;

public class BodyTextController : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created

    [Header("Constants")]
    [SerializeField] private int _focus = 0;
    [SerializeField] private int _focusPage = 0;
    [SerializeField] private TMP_Text _titleObject;
    [SerializeField] private TMP_Text _subTitleObject;
    [SerializeField] private TMP_Text _textObject;
    [SerializeField] private VideoPlayer _backgroundVideo;
    [SerializeField] private MeshRenderer _focus3DMeshRenderer;
    [SerializeField] private MeshFilter _focus3DMeshFilter;
    [SerializeField] private int[] _focusPageLengths;

    [Header("Data for all focuses")]
    [SerializeField] private string[] _focusBackgroundVideos;
    [SerializeField] private string[] _focusTitles;

    [Header("Data for focus 1")]
    [SerializeField] private string[] _focusSubTitles;
    [SerializeField] private string[] _focusBodies;
    [SerializeField] private Material[] _focusMaterial;
    [SerializeField] private Mesh[] _focusMesh;

    [Header("Data for focus 2")]
    [SerializeField] private string[] _focusSubTitles1;
    [SerializeField] private string[] _focusBodies1;
    [SerializeField] private Material[] _focusMaterial1;
    [SerializeField] private Mesh[] _focusMesh1;

    [Header("Data for focus 3")]
    [SerializeField] private string[] _focusSubTitles2;
    [SerializeField] private string[] _focusBodies2;
    [SerializeField] private Material[] _focusMaterial2;
    [SerializeField] private Mesh[] _focusMesh2;

    public void firstFocus() {
        _focus = 0;
        _focusPage = 0;
        _backgroundVideo.url = _focusBackgroundVideos[0];
        _titleObject.text = _focusTitles[0];
        _subTitleObject.text = _focusSubTitles[0];
        _textObject.text = _focusBodies[0];
        _focus3DMeshFilter.mesh = _focusMesh[0];
        _focus3DMeshRenderer.material = _focusMaterial[0];
    }
    public void nextPage() {
        _focusPage += 1;
        if (_focusPage >= _focusPageLengths[_focus]) {_focusPage = 0;}
        if (_focus == 0) {
            _subTitleObject.text = _focusSubTitles[_focusPage];
            _textObject.text = _focusBodies[_focusPage];
            _focus3DMeshFilter.mesh = _focusMesh[_focusPage];
            _focus3DMeshRenderer.material = _focusMaterial[_focusPage];
        } else if (_focus == 1) {
            _subTitleObject.text = _focusSubTitles1[_focusPage];
            _textObject.text = _focusBodies1[_focusPage];
            _focus3DMeshFilter.mesh = _focusMesh1[_focusPage];
            _focus3DMeshRenderer.material = _focusMaterial1[_focusPage];
        } else if (_focus == 2) {
            _subTitleObject.text = _focusSubTitles2[_focusPage];
            _textObject.text = _focusBodies2[_focusPage];
            _focus3DMeshFilter.mesh = _focusMesh2[_focusPage];
            _focus3DMeshRenderer.material = _focusMaterial2[_focusPage];
        }
    }
    public void prevPage() {
        _focus = 0;
        _focusPage = 0;
        _backgroundVideo.url = _focusBackgroundVideos[0];
        _titleObject.text = _focusTitles[0];
        _subTitleObject.text = _focusSubTitles[0];
        _textObject.text = _focusBodies[0];
        _focus3DMeshFilter.mesh = _focusMesh[0];
        _focus3DMeshRenderer.material = _focusMaterial[0];
    }

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
