using System.Collections;
using UnityEngine;
using UnityEngine.Video;
using UnityEngine.SceneManagement;

public class MenuContainerSlide : MonoBehaviour
{
    [Header("Slide in and out")]
    [SerializeField] private bool movingIn = true;
    [SerializeField] private bool movingOut = false;
    [SerializeField] private float _speed = 100f;
    [SerializeField] private RectTransform rectTransform;

    [Header("Changing background videos")]
    [SerializeField] private bool endMovie;
    [SerializeField] private VideoPlayer backgroundVid;
    [SerializeField] private string startupClip;
    [SerializeField] private string standardClip;
    [SerializeField] private string exitClip;
    [SerializeField] private float startupTiming;
    [SerializeField] private float standardTiming;
    [SerializeField] private float exitTiming;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        rectTransform = GetComponent<RectTransform>();
        if (rectTransform is not null) {Debug.Log("Menu UI rcttransform got");}
        else {Debug.LogError("Couldn't find Menu UI recttransform");}
        rectTransform.anchoredPosition = new Vector2(700, 0);
        backgroundVid.url = startupClip;
        StartCoroutine(switchToStandard());
    }

    // Update is called once per frame
    void Update()
    {
        if (movingIn) {
            Vector3 _move = Vector3.left * _speed;
            transform.Translate(_move * Time.deltaTime);    
            if (rectTransform.anchoredPosition[0] > 10) {
                transform.Translate(_move * Time.deltaTime);    
            } else {
                _move *= 0.5f;
                transform.Translate(_move * Time.deltaTime);
                if(_move.magnitude < 0.01f) _move = Vector3.zero;  
            }
            if (rectTransform.anchoredPosition[0] <= 0) {
                movingIn = false;
                rectTransform.anchoredPosition = new Vector2(0, 0);
            }
        }  
        if (movingOut) {
            transform.Translate(Vector3.right * _speed * 10 * Time.deltaTime);    
        }  
    }

    public void startGame() {
        endMovie = true;
        StartCoroutine(slideOutTime(10f));
    }

    IEnumerator switchToEnd() {
        while (true) {
            yield return new WaitForSeconds(standardTiming);
            if (endMovie) {
                backgroundVid.url = exitClip;
                backgroundVid.isLooping = false;
                break;
            }
        }
        yield return new WaitForSeconds(exitTiming);
        StartCoroutine(LoadHomePage());
    }

    IEnumerator LoadHomePage()
    {
        AsyncOperation asyncLoad = SceneManager.LoadSceneAsync("Scenes/HomeScene");
        while (!asyncLoad.isDone)
        {
            yield return null;
        }
    }

    IEnumerator slideOutTime(float time) {
        movingOut = true;
        yield return new WaitForSeconds(time);
        movingOut = false;
    }

    IEnumerator switchToStandard() {
        yield return new WaitForSeconds(startupTiming);
        backgroundVid.url = standardClip;
        StartCoroutine(switchToEnd());
    }
}
