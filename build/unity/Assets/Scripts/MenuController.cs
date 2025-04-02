using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using TMPro;

public class MenuController : MonoBehaviour
{
    [Header("LevelToLoad")]
    [SerializeField]
    private string _nextGameLevel;

    [Header("VolumeSettings")]
    [SerializeField] private TMP_Text _volumeTextValue;
    [SerializeField] private Slider _volumeSlider;
    [SerializeField] private float _volume = 50;
    [SerializeField] private GameObject confirmationPrompt;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void SetVolume(float volume) {
        AudioListener.volume = volume;
        _volumeTextValue.text = (volume * 100).ToString("000%");
    }

    public void VolumeApply() {
        PlayerPrefs.SetFloat("masterVolume", AudioListener.volume);

    }

    IEnumerator VolumeConfirm(float t) {
        confirmationPrompt.SetActive(true);
        yield return new WaitForSeconds(t);
        confirmationPrompt.SetActive(false);
    }
}
