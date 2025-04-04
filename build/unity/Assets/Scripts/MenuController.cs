using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using UnityEngine.Video;
using TMPro;
using Unity.VisualScripting;
using System;
using UnityEngine.InputSystem.Controls;

public class MenuController : MonoBehaviour
{
    [Header("LevelToLoad")]
    [SerializeField] private string _nextGameLevel;
    [SerializeField] private GameObject _audioSettings;

    [Header("VolumeSettings")]
    [SerializeField] private TMP_Text _volumeTextValue;
    [SerializeField] private Slider _volumeSlider;
    [SerializeField] private GameObject _confirmationPrompt;
    [SerializeField] private TMP_Text _confirmationText;
    [SerializeField] private float _volume;

    [Header("Credits")]
    [SerializeField] private GameObject _credits;
    [SerializeField] private VideoPlayer _creditsVideoPlayer;
    [SerializeField] private string _creditsVideo;
    [SerializeField] private float _creditsTime;
    [SerializeField] private CanvasGroup _creditsGroup;
    [SerializeField] public bool _creditsIn;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        _volumeSlider.onValueChanged.AddListener(delegate {CheckVolume(); });
        AudioListener.volume = 0.5f;
        PlayerPrefs.SetFloat("masterVolume", AudioListener.volume);
        _volumeSlider.value = 0.5f;
        _volumeTextValue.text = _volumeSlider.value.ToString("0%");
        _volume = 0.5f;
        _creditsGroup.alpha = 0f;
        _creditsIn = false;
    }

    // Update is called once per frame
    void Update()
    {
        creditsFade();
    }

    void creditsFade() {
        if (_creditsIn) {
            if (_creditsGroup.alpha < 1){
                _creditsGroup.alpha += Time.deltaTime;
            }
        }
        else {
            if (_creditsGroup.alpha > 0){
                _creditsGroup.alpha -= Time.deltaTime;
            }
        }
    }

    public void OpenAudioSettings() {
        _audioSettings.SetActive(true);
        _creditsIn = false;
        _volumeTextValue.text = _volumeSlider.value.ToString("0%");
    }

    public void CheckVolume() {
        Debug.Log(_volumeSlider.value);
        _volumeTextValue.text = _volumeSlider.value.ToString("0%");
    }

    public void VolumeConfirmApply() {
        _confirmationPrompt.SetActive(true);
        _audioSettings.SetActive(false);
        _confirmationText.text = "WARNING: Are you sure you want to apply this volume?";
        _volume = _volumeSlider.value;                                                                                                                                                                       
    }

    public void VolumeConfirmDefault() {
        // PlayerPrefs.SetFloat("masterVolume", AudioListener.volume);
        _confirmationPrompt.SetActive(true);
        _audioSettings.SetActive(false);
        _confirmationText.text = "WARNING: Are you sure you want to reset to defaults?";
        _volume = 0.5f;         
    }

    public void VolumeBack() {
        // PlayerPrefs.SetFloat("masterVolume", AudioListener.volume);
        _audioSettings.SetActive(false);
    }

    public void VolumeConfirmBack() {
        // PlayerPrefs.SetFloat("masterVolume", AudioListener.volume);
        _confirmationPrompt.SetActive(false);
        _audioSettings.SetActive(true);
    }

    public void VolumeConfirmEd() {
        _confirmationPrompt.SetActive(false);
        AudioListener.volume = _volume;
        _volumeSlider.value = _volume;
        PlayerPrefs.SetFloat("masterVolume", AudioListener.volume);
    }

    public void DisplayCredits() {
        if (_creditsIn) {
            _creditsIn = false;
            _creditsVideoPlayer.Stop();
        }
        else {
            _creditsIn = true;
            _creditsVideoPlayer.url = _creditsVideo;
            _creditsVideoPlayer.isLooping = true;
            _creditsVideoPlayer.Play();
            StartCoroutine(EndCredits());
        }
    }

    public void StartGame() {
        _creditsIn = false;
    }

    IEnumerator EndCredits() {
        yield return new WaitForSeconds(_creditsTime);
        _creditsVideoPlayer.Stop();
        _creditsIn = false;
    }
}
