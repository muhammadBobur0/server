import {
    delModelBanner,
  getByIdModelBanner,
  getModelBanner,
  postModelBanner,
  putModelBanner,
} from "../model/banner.model.js";
import path from 'path';


const bannerGet = async (req, res) => {
  try {
    const getBanner = await getModelBanner();
    if (getBanner) {
      res.status(200).json({
        status: 200,
        message: "SUCCES",
        data: getBanner,
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "BANNER NOT FOUND",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      messaage: error.message,
    });
  }
};

const bannerbyId = async (req, res) => {
  try {
    let [getById] = await getByIdModelBanner(req.params.id);
    console.log(getById);
    if (getById) {
      res.status(200).json({
        status: 200,
        message: "GET SUCCES",
        data: getById,
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "GET FAILED",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      messaage: error.message,
    });
  }
};

const bannerPost = async (req, res) => {
  let { name } = req.files.img;


  if (!name) {
    return res.status(404).json({
      status: 404,
      message: "Image Not Found",
    });
  }
  if (!req.body.title) {
    return res.status(404).json({
      status: 404,
      message: "Title Not Found",
    });
  }
  try {

    let fileName = Date.now() + name.replace(/\s/g, "");
    req.files.img.mv(path.resolve("uploads", fileName));

    console.log(path.join('uploads'));
    console.log(path.resolve("uploads"));

    let [createBanner] = await postModelBanner(req.body.title, name);
    if (createBanner) {
      res.status(201).json({
        status: 201,
        message: "BANNER SUCCES CREATED",
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "BANNER CREATE FAILED",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      messaage: error.message,
    });
  }
};

const bannerPut = async (req, res) => {
  const { id } = req.params;
  const { name } = req.files.img;
  console.log(name);
  try {
    putModelBanner(req.body.title, name, id);
    res.status(200).json({
      status: 200,
      messaage: "SUCCES EDITED",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      messaage: error.message,
    });
  }
};

const bannerDelete = async (req, res) => {
    try {
        const [deleteBanner] = await delModelBanner(req.params.id)        
        console.log(deleteBanner);
        if(deleteBanner) {
            res.status(200).json({
                status: 200,
                message: 'BANNER SUCCES DELETED',
                data: deleteBanner
            })
        }else {
            res.status(400).json({
                status: 400,
                messaage: 'DELETE FAILED',
              });
        }
    } catch (error) {
        res.status(400).json({
            status: 400,
            messaage: error.message,
          });
    }

}

export { bannerGet, bannerbyId, bannerPost, bannerPut, bannerDelete};
