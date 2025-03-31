using UnityEngine;

public class POVCam : MonoBehaviour
{
    [SerializeField]
    private float _speed = 5.0f;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        MoveCalc(); 
    }

    void MoveCalc()
    {
        float horizontalInput = Input.GetAxis("Horizontal");
        float depthInput = Input.GetAxis("Vertical");
        transform.Translate(new Vector3(horizontalInput, 0, depthInput) * _speed  * Time.deltaTime);
    }
}
