using System.Collections;
using UnityEditor.SceneManagement;
using UnityEngine;

public class overlay_outline : MonoBehaviour
{
    [SerializeField] 
    private float _loadingDelay = 1f;

    [SerializeField]
    private float _speed = 10f;

    [SerializeField]
    private bool _startResize = false;

    [SerializeField]
    private int _stage = 1;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        transform.position = new Vector3(0, 0, 55);
        StartCoroutine(loadingDelay(_loadingDelay));
    }

    // Update is called once per frame
    void Update()
    {
        if (_startResize)
        {
            if (_stage == 1) 
            {
                if (transform.position.z < 87)
                {
                    transform.Translate(_speed * Time.deltaTime * new Vector3(0, 0, 1));
                } else {
                    _stage = 2;
                }
            } else if (_stage == 2) 
            {
                if (transform.position.z > 80)
                {
                    transform.Translate(_speed * -1 * Time.deltaTime * new Vector3(0, 0, 1));
                } else {
                    _stage = 3;
                }
            } else {
                if (transform.position.z < 89)
                {
                    transform.Translate(_speed * Time.deltaTime * new Vector3(0, 0, 1));
                }
            }
        }
    }

    private IEnumerator loadingDelay(float time) {
        yield return new WaitForSeconds(time);
        _startResize = true;
    }
}
