import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Car2({
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
          d="m1.189,5.311l.561-.561h8.5l.561.561c.281.281.439.663.439,1.061v2.879H.75v-2.879c0-.398.158-.779.439-1.061Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m1.75,4.75l.581-2.71c.099-.461.506-.79.978-.79h5.383c.472,0,.879.329.978.79l.581,2.71"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m.75,9.25h1.5v1c0,.276-.224.5-.5.5h-.5c-.276,0-.5-.224-.5-.5v-1h0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m9.75,9.25h1.5v1c0,.276-.224.5-.5.5h-.5c-.276,0-.5-.224-.5-.5v-1h0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle cx="3.25" cy="7" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="8.75" cy="7" fill={secondaryfill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Car2;
