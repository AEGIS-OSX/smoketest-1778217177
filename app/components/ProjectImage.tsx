import type { ImgHTMLAttributes } from "react";

type ProjectImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const PROJECT_IMAGES: Record<string, ProjectImageAsset> = {
  hero: {
    src: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778217177/cleo/1778217937769-hero.png",
    alt: "Cropped urban dog-walking moment on wet pavement with brass leash hardware and a restrained coral reflection.",
    width: 1536,
    height: 1024,
  },
  feature_1: {
    src: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778217177/cleo/1778217935049-feature_1.png",
    alt: "Brass watch, folded schedule card, olive leash, and a partial dog paw on a deep slate surface.",
    width: 1536,
    height: 1024,
  },
  feature_2: {
    src: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778217177/cleo/1778217934005-feature_2.png",
    alt: "Leash clip being secured to a dog harness at a slate-black urban doorway with brass hardware.",
    width: 1536,
    height: 1024,
  },
  feature_3: {
    src: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778217177/cleo/1778217934703-feature_3.png",
    alt: "Phone, brass dog tag, folded city map, leash, and a coral marker on warm stone linen.",
    width: 1536,
    height: 1024,
  },
  social_proof: {
    src: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778217177/cleo/1778217949446-social_proof.png",
    alt: "Calm dog in a late-evening apartment lobby beside a brass plaque, stone bench, and olive leash.",
    width: 1536,
    height: 1024,
  },
};

export interface ProjectImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height"> {
  id: string;
  alt?: string;
}

export function ProjectImage({
  id,
  alt,
  loading,
  decoding,
  fetchPriority,
  ...props
}: ProjectImageProps) {
  const image = PROJECT_IMAGES[id];

  if (!image) {
    return null;
  }

  return (
    <img
      src={image.src}
      alt={alt ?? image.alt}
      width={image.width}
      height={image.height}
      loading={loading ?? (id === "hero" ? "eager" : "lazy")}
      decoding={decoding ?? "async"}
      fetchPriority={fetchPriority ?? (id === "hero" ? "high" : undefined)}
      {...props}
    />
  );
}

export default ProjectImage;
