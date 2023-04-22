import "./BLoading.css";
export const BLoading = ({ title }) => {
    return (<>
        <div className="bdc-loader-container">
            <span class="bdc-loader"></span>
            <span class="bdc-loader-title">{title ?? "Yükleniyor..."}</span>
        </div>
    </>)
}