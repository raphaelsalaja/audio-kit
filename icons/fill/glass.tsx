import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Glass({
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
          d="M15.056,2.247c-.142-.157-.344-.247-.556-.247H3.5c-.212,0-.414,.09-.556,.247-.143,.157-.212,.367-.19,.578l1.07,10.699c.14,1.412,1.316,2.477,2.735,2.477h4.881c1.419,0,2.596-1.065,2.735-2.476l1.07-10.699c.021-.211-.048-.421-.19-.578Zm-1.385,1.253l-.55,5.5H4.879l-.55-5.5H13.671Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Glass;
