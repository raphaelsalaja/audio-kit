import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label3({
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
          d="M12.5234 15H4.75C3.2334 15 2 13.7666 2 12.25V5.75C2 4.2334 3.2334 3 4.75 3H12.5234C13.0546 3 13.5498 3.2368 13.8838 3.6504L17.833 8.5278C18.0557 8.8032 18.0557 9.1967 17.833 9.4721L13.8828 14.351C13.5498 14.7631 13.0547 15 12.5234 15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Label3;
