import React, { useState, useEffect } from 'react';
import Gallery from '../components/Gallery';
import getPhotos from './getPhotos';

export default function Photos() {
    const [photos, setPhotos] = useState(null); // State to store photos

    useEffect(() => {
        // Fetch photos on component mount
        getPhotos().then((result) => {
            setPhotos(result); // Update state with fetched photos
        });
    }, []); // Empty dependency array means this runs once after initial render

    if (!photos) {
        // Show loading state while photos are being fetched
        return <h1>Loading...</h1>;
    }
    console.log('we resolved it',photos)
    // Once photos are fetched, render the gallery
    return (
        <section>
            <h2 className="text-2xl mb-4">Photography</h2>
            <Gallery photos={photos} />
        </section>
    );
}