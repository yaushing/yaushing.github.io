using UnityEngine;

public class Focus3DObjectSpin : MonoBehaviour
{

    [SerializeField]
    private float _rotateSpeed = 0.1f;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(Vector3.up * _rotateSpeed);
    }
}
