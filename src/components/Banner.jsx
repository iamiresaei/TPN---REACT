
export function Banner() {
    return(
        <div className="banner-bar">
            <div className="banner-txt">
                <div className="banner-h1">
                    <h1><i class="fa-solid fa-wifi fa-shake"></i>تی پی ان قطع نمیشه !</h1>
                </div>
                <div className="banner-p">
                    <p><i class="fa-solid fa-crown"></i>با خرید این پکیج میتوانید به سرورهای اختصاصی ما دسترسی داشته باشید.</p>
                </div>
                <div className="banner-p">
                    <p><i class="fa-solid fa-trophy"></i>این پکیج دارای سرور های تحریم شکن و سرور های گیمینگ تک کاربره است.</p>
                </div>
                <div className="banner-p">
                   <p><i class="fa-solid fa-plug"></i>پکیج های ما را میتوانید برای اندروید ، آیفون , ویندوز ، مک و … به راحتی استفاده کنید.</p> 
                </div>
            </div>
            <div className="banner-img">
                <img src="../images/banner/Connected world-bro.svg" alt="" />
            </div>
        </div>
    )
}