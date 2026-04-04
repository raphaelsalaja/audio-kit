import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eclipse({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1ZM2.5,9c0-3.239,2.384-5.925,5.488-6.413-1.987,1.476-3.238,3.83-3.238,6.413s1.251,4.937,3.238,6.413c-3.104-.489-5.488-3.174-5.488-6.413Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Eclipse;
