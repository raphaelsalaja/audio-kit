import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flashlight({
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
          d="m5.1929,5.1939h7.7617c.5519,0,1,.4481,1,1v1.584c0,2.6938-2.187,4.8808-4.8808,4.8808h0c-2.6938,0-4.8808-2.187-4.8808-4.8808v-1.584c0-.5519.4481-1,1-1Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
          transform="translate(8.9695 -3.8016) rotate(45)"
        />
        <path
          d="m5.1929,5.1939h7.7617c.5519,0,1,.4481,1,1v1.584c0,2.6938-2.187,4.8808-4.8808,4.8808h0c-2.6938,0-4.8808-2.187-4.8808-4.8808v-1.584c0-.5519.4481-1,1-1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(8.9695 -3.8016) rotate(45)"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.6172"
          x2="5.25"
          y1="12.8828"
          y2="16.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="5.1172"
          y1="12.75"
          y2="9.3828"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.5"
          x2="4.25"
          y1="13.5"
          y2="13.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.0359"
          x2="12.6577"
          y1="5.11"
          y2="11.7318"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.75"
          x2="11.75"
          y1="1.25"
          y2="2.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16"
          x2="14.5784"
          y1="2"
          y2="3.4216"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.75"
          x2="15.75"
          y1="6.25"
          y2="6.25"
        />
      </g>
    </svg>
  );
}

export default Flashlight;
