import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tag({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M15.866,8.056L10.116,2.306c-.52-.52-1.21-.806-1.944-.806H3.25c-.965,0-1.75,.785-1.75,1.75v4.921c0,.735,.286,1.425,.806,1.945l5.75,5.75c.536,.536,1.24,.804,1.944,.804s1.408-.268,1.944-.804l3.922-3.922c.52-.519,.806-1.209,.806-1.944s-.286-1.425-.806-1.944Zm-9.616-.556c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25,.561,1.25,1.25-.561,1.25-1.25,1.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tag;
