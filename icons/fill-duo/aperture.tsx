import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Aperture({
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
          d="M17.3054 6.23895C17.5938 7.1069 17.75 8.03522 17.75 9.00001C17.75 11.2322 16.9141 13.2692 15.5384 14.815L10.5771 6.24656L17.3054 6.23895Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.22519 17.5699C4.15086 16.9365 1.66555 14.6905 0.692566 11.7551L10.5807 11.7428L7.22519 17.5699Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.7538 0.425807L5.81905 8.99774L2.45718 3.19C4.05998 1.38636 6.39727 0.25 9 0.25C9.60067 0.25 10.1872 0.310524 10.7538 0.425807Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17.3046 6.23626L7.4039 6.24859L10.7566 0.426361C13.8363 1.05398 16.3277 3.2993 17.3046 6.23626Z"
          fill={fill}
        />
        <path
          d="M0.25 9.00001C0.25 6.77123 1.08328 4.73709 2.4553 3.19214L7.40742 11.7449L0.691676 11.7524C0.40511 10.887 0.25 9.96161 0.25 9.00001Z"
          fill={fill}
        />
        <path
          d="M15.5365 14.8171C13.9339 16.6166 11.5993 17.75 8.99999 17.75C8.39288 17.75 7.80021 17.6882 7.22794 17.5705L12.1655 8.99365L15.5365 14.8171Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Aperture;
