import galleryData from "../data/gallery.json";
import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置：由 Pages CMS 可视化编辑 src/data/gallery.json
// id 对应 public/gallery/<id>/ 目录，目录里的图片会被自动扫描进来
export const galleryConfig: GalleryConfig = galleryData as GalleryConfig;
