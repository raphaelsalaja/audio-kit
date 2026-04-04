import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSmile({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm2,6c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-4,0c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm6.41,4.354c-.874,1.632-2.563,2.646-4.41,2.646s-3.537-1.014-4.41-2.646c-.196-.365-.058-.82,.307-1.015,.365-.196,.819-.059,1.015,.307,.612,1.144,1.795,1.854,3.088,1.854s2.476-.71,3.088-1.854c.196-.366,.65-.503,1.015-.307,.365,.195,.503,.65,.307,1.015Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSmile;
