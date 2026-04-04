import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hexadecagon({
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
          d="M7.7627 1.75167C8.44597 1.0684 9.55332 1.06938 10.2367 1.75099L11.4857 3.00002H13.25C14.2162 3.00002 15 3.78381 15 4.75002V6.5134L16.2472 7.75505C16.9319 8.43791 16.9324 9.55447 16.2481 10.2375L15 11.4856V13.2499C15 14.2161 14.2162 14.9999 13.25 14.9999H11.4857L10.2374 16.2482C9.5541 16.9315 8.44674 16.9305 7.76338 16.2489L6.51437 14.9999H4.75003C3.78382 14.9999 3.00003 14.2161 3.00003 13.2499V11.4856L1.75245 10.238C1.0681 9.55508 1.06777 8.44526 1.75205 7.76238L3.00003 6.51437V4.75002C3.00003 3.78381 3.78382 3.00002 4.75003 3.00002H6.51437L7.7627 1.75167Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Hexadecagon;
