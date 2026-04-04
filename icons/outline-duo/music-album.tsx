import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicAlbum({
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
          d="M14.552 4.75H3.44802C2.82402 4.75 2.35202 5.315 2.46402 5.929L4.10102 14.929C4.18802 15.404 4.60202 15.75 5.08502 15.75H12.916C13.399 15.75 13.814 15.404 13.9 14.929L15.536 5.929C15.647 5.315 15.176 4.75 14.552 4.75ZM11.25 10C11.25 11.2426 10.2426 12.25 9 12.25C7.75736 12.25 6.75 11.2426 6.75 10C6.75 8.75736 7.75736 7.75 9 7.75C10.2426 7.75 11.25 8.75736 11.25 10Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 12.25C10.2426 12.25 11.25 11.2426 11.25 10C11.25 8.75736 10.2426 7.75 9 7.75C7.75736 7.75 6.75 8.75736 6.75 10C6.75 11.2426 7.75736 12.25 9 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 1.75H4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.44802 4.75H14.552C15.176 4.75 15.647 5.315 15.536 5.929L13.9 14.929C13.814 15.404 13.399 15.75 12.916 15.75H5.08502C4.60202 15.75 4.18802 15.404 4.10102 14.929L2.46402 5.929C2.35202 5.315 2.82402 4.75 3.44802 4.75Z"
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

export default MusicAlbum;
