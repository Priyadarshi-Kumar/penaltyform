import React from 'react';
import ImageUploader from 'react-images-upload';
 
class Imageuploader extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <ImageUploader
                withPreview={true}
                withIcon={false}
                withLabel={false}
                buttonText='Upload images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                maxFileSize={10242880}
            />
        );
    }
}

export default Imageuploader