import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CursorDefault({
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
          d="M15.0925 6.23803C16.5405 6.77419 16.5325 8.82624 15.0786 9.34922L11 10.8173C10.9135 10.8487 10.847 10.9161 10.8174 10.9987L9.34858 15.0786C8.82554 16.5323 6.77322 16.5406 6.23705 15.0927L2.28796 4.45967C2.26886 4.40808 2.24934 4.35666 2.23296 4.30413C1.83685 3.03388 3.04404 1.82845 4.31725 2.23762C4.37349 2.25569 4.42863 2.27705 4.48402 2.29757L15.0925 6.23803Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CursorDefault;
