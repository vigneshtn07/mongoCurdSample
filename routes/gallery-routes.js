
/** 
* Get All galery Items 
*/
app.get('/getGalleryList', (req, response)=> {
    GalleryModel.find((err, res) => {
        if (err) return response.status(400).send('Something went wrong.!');
        response.status(200).send(res);
    })
});

/** 
* Insert image item to db 
*/
app.post('/createLinks', (req, res)=> {
    let galleryItem = new GalleryModel(req.body);
    galleryItem.save().then((item => {
        res.status(200).send('Item added successfully');
    }))
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

/** 
* Update item
*/
app.post('/updateLink', (req, res)=> {
    GalleryModel.findByIdAndUpdate({_id: req.body.id}, req).then((item => {
        res.status(200).send('Uodated data successfully');
    }))
    .catch(err => {
        res.status(400).send("unable to update to database");
    });    
});

/** 
* Delete an item
*/
app.post('/createLinks', (req, res)=> {
    let galleryItem = new GalleryModel(req.body);
    galleryItem.save().then((item => {
        res.status(200).send('Item added successfully');
    }))
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});