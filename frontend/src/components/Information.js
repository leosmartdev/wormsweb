import React, { Component } from "react";
import '../App.css';

class Information extends Component {
    render() {
        return (
            <div className='tournament' id="information">
                <div className='d-flex justify-content-center tournament-title'>
                    <p>Información</p>
                </div>
                <div className='d-flex justify-content-center touranment-description'>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit, sed diam nonummy nibh euismod tincidunt ut 
laoreet dolore magna aliquam erat volutpat. Ut wisi 
enim ad minim veniam, quis nostrud exerci tation 
ullamcorper suscipit lobortis nisl ut aliquip ex ea 
commodo consequat. Duis autem vel eum iriure dolor 
in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at 
vero eros et accumsan et iusto odio dignissim qui 
blandit praesent luptatum zzril delenit augue duis 
dolore te feugait nulla facilisi</p> 
                </div>
            </div>
        );
    }
}

export default Information;