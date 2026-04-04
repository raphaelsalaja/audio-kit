import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Twitch({
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
        <path d="M8.5,2L3.143,7.357V26.643h6.429v5.357l5.357-5.357h4.286l9.643-9.643V2H8.5ZM26.714,15.929l-4.286,4.286h-4.286l-3.75,3.75v-3.75h-4.821V4.143H26.714V15.929Z" />
        <path d="M21.357 7.893H23.5V14.322H21.357z" />
        <path d="M15.464 7.893H17.607V14.322H15.464z" />
      </g>
    </svg>
  );
}

export default Twitch;
