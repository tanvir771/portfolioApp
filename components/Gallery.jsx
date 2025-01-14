export default function Gallery(photoObj) {
    return (
        <div className="m-4 columns-2 lg:columns-4 py-10 md:py-20 gap-4">
            {photoObj.photos.map((obj, index) => (
                <div key={index} className="mb-4 break-inside-avoid relative">

                    <img src={obj.link} className="w-full object-cover rounded-lg" />
                    <a href={obj.flickerLink}>
                        <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center sm:text-2xl md:text-3xl lg:text-6xl text-white font-semibold'>
                            {obj.title}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}