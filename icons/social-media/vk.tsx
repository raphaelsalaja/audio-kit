import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vk({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path d="M28.04,3.96c-1.979-1.96-5.143-1.96-11.48-1.96h-1.12c-6.328,0-9.492,0-11.48,1.96-1.96,1.979-1.96,5.143-1.96,11.48v1.12c0,6.328,0,9.492,1.96,11.48,1.979,1.96,5.143,1.96,11.48,1.96h1.12c6.328,0,9.492,0,11.48-1.96,1.96-1.979,1.96-5.143,1.96-11.48v-1.12c0-6.328,0-9.492-1.96-11.48Zm-5.945,18.209c-.709-2.212-2.483-3.929-4.825-4.163v4.163h-.373c-6.384,0-10.024-4.368-10.173-11.648h3.211c.103,5.339,2.455,7.597,4.321,8.064V10.521h3.015v4.601c1.839-.196,3.78-2.296,4.433-4.611h3.005c-.495,2.422-1.976,4.529-4.088,5.815,2.358,1.174,4.101,3.3,4.788,5.843h-3.313Z" />
      </g>
    </svg>
  );
}

export default Vk;
