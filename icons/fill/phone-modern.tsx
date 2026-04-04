import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneModern({
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
          d="M12.25,1H5.75c-.965,0-1.75,.785-1.75,1.75V15.25c0,.965,.785,1.75,1.75,1.75h6.5c.965,0,1.75-.785,1.75-1.75V2.75c0-.965-.785-1.75-1.75-1.75Zm.25,3V13H5.5V4h7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhoneModern;
