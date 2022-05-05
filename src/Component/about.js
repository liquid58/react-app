function About(){
    return(
<div>
    <h1>This is About page</h1>
    <h1>Delay</h1>
    <p>
        You can pass an optional delay prop which specifies the time (in milliseconds) react-placeholder should wait before displaying the placeholder element. This is useful if you want to show a placeholder for slower connections while avoiding a brief "flash" on faster connections.
        Note that this delay will not affect the initial render, only subsequent "ready" state changes. Setting the firstLaunchOnly prop to true will also disable this feature.
        Animation
        react-placeholder already comes with one default pulse animation to better tell the user that the page is loading. The animation is defined in a separate CSS file so, in order to enable it, you should import that style in your project like this:
    </p>
</div>
    )
}
export default About;