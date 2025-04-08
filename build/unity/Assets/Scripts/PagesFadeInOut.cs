using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class PagesFadeInOut : MonoBehaviour
{
    [SerializeField]
    private CanvasGroup _overlayGroup;
    [SerializeField]
    private bool _fadeIn = false;
    // Start is called once before the first execution of Update after the MonoBehaviour is created

    public void NewScene() {
        _fadeIn = true;
    }

    public void ProjectScene() {
        StartCoroutine(LoadProjectScene());
    }

    public void AchievementScene() {
        StartCoroutine(LoadAchievementScene());
    }

    public void HomeScene() {
        StartCoroutine(LoadHomeScene());
    }


    IEnumerator LoadProjectScene()
    {
        yield return new WaitForSeconds(2f);
        AsyncOperation asyncLoad = SceneManager.LoadSceneAsync("Scenes/ProjectScene");
        while (!asyncLoad.isDone)
        {
            yield return null;
        }
    }

    IEnumerator LoadAchievementScene()
    {
        yield return new WaitForSeconds(2f);
        AsyncOperation asyncLoad = SceneManager.LoadSceneAsync("Scenes/AchievementScene");
        while (!asyncLoad.isDone)
        {
            yield return null;
        }
    }

    IEnumerator LoadHomeScene()
    {
        yield return new WaitForSeconds(2f);
        AsyncOperation asyncLoad = SceneManager.LoadSceneAsync("Scenes/HomeScene");
        while (!asyncLoad.isDone)
        {
            yield return null;
        }
    }

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (_fadeIn && _overlayGroup.alpha < 1) {
            _overlayGroup.alpha += Time.deltaTime;
        } else if (!_fadeIn && _overlayGroup.alpha > 0) {
            _overlayGroup.alpha -= Time.deltaTime;
        }
    }
}
