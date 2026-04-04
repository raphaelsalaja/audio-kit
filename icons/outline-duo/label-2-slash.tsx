import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Slash({
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
          d="m13.559,4.441l-.259-.32c-.19-.235-.475-.371-.777-.371h-7.773c-1.105,0-2,.895-2,2v6.5c0,.8114.4826,1.5097,1.1767,1.8234L13.559,4.441Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m7.451,14.25h5.072c.302,0,.587-.136.777-.371l3.95-4.879-2.2516-2.7811-7.5191,7.5192-.0283.5119Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m3.927,14.073c-.694-.314-1.177-1.012-1.177-1.823v-6.5c0-1.105.895-2,2-2h7.773c.302,0,.587.136.777.371l.259.32"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2,16L16,2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.4572,6.785l1.7928,2.215-3.95,4.879c-.19.235-.475.371-.777.371h-4.5308"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Label2Slash;
