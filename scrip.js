const videoElement =document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream()
{
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>
        {
            videoElement.play();
        };
    } 
    catch (error) {
        
    }
}
button.addEventListener('click', async () => {
    button.disabled = false;

    await videoElement.requestPictureinPicture();

    button.disabled = true;
});

selectMediaStream();