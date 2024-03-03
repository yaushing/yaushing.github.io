using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TagBehaviors : MonoBehaviour
{
    Transform player;
    [SerializeField] private float threshold;
    private const float scaleSpeed = 10f;
    private Vector3 scaleChangeUp = new Vector3(0.01f * scaleSpeed, 0.01f * scaleSpeed, 0.01f * scaleSpeed);
    private Vector3 scaleChangeDown = new Vector3(-0.01f * scaleSpeed, -0.01f * scaleSpeed, -0.01f * scaleSpeed);
    private float distance;

    // Start is called before the first frame update
    void Start()
    {
        player = GameObject.Find("Player").transform;
    }

    // Update is called once per frame
    void Update()
    {
        distance = Vector3.Distance(transform.position, player.position);
        if (distance < threshold)
        {
            if (transform.localScale.y < 1f)
            {
                transform.localScale += scaleChangeUp;
            }
        } else
        {
            if (transform.localScale.y > 0.1f)
            {
                transform.localScale += scaleChangeDown;
            } else
            {
                transform.localScale = new Vector3(0.1f, 0.1f, 0.1f);
            }
        }
    }
}
