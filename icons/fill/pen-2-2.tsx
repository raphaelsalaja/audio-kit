import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pen22({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m10.259,5.2l.688-.688c.462-.461.716-1.076.716-1.729s-.254-1.267-.716-1.729c-.923-.924-2.534-.924-3.457,0l-.688.688,3.457,3.457Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5.741,2.803l-3.888,3.888c-.311.311-.535.699-.648,1.124l-.861,3.231c-.046.172.003.356.129.482.095.095.223.146.354.146.043,0,.086-.005.129-.017l3.231-.861c.425-.113.813-.337,1.124-.648l3.888-3.888-3.457-3.457Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Pen22;
