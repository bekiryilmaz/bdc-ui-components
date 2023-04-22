import "../_Common/styles.css";
import "./Button.css";
import { LoadingStatus } from "../_Common/UiConstants";
import { BLoading } from "../BLoading/BLoading";

export const BButton = ({ className, style, title, disabled, status, onClick, icon, loadingText }) => {
    return (<>
        {
            status == LoadingStatus.Loading ? 
            <div disabled={disabled} style={style} className={className ?? "bdc-button"}>
                <BLoading title={loadingText}/>
            </div> :
            <div disabled={disabled} style={style} value={title} className={className ?? "bdc-button"} onClick={onClick}>
                <div className="bdc-button-icon">{icon}</div>
                <div className="bdc-button-title">{title}</div>
            </div>
        }
    </>)
}