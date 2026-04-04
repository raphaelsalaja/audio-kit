import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageSparkle({
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
          d="M2 4.75C2 3.23069 3.23128 2 4.75 2H13.25C14.7687 2 16 3.23069 16 4.75V13.25C16 14.7693 14.7687 16 13.25 16H4.75C3.23128 16 2 14.7693 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16 12.6731V13.25C16 14.7693 14.7687 16 13.25 16H4.74998C4.42692 16 4.11688 15.9443 3.82892 15.842L10.0849 9.586C10.8659 8.805 12.1319 8.805 12.9129 9.586L16 12.6731Z"
          fill={fill}
        />
        <path
          d="M9.15802 6.508L7.89502 6.087L7.47402 4.824C7.33702 4.416 6.66202 4.416 6.52502 4.824L6.10402 6.087L4.84102 6.508C4.63702 6.576 4.49902 6.767 4.49902 6.982C4.49902 7.197 4.63702 7.388 4.84102 7.456L6.10402 7.877L6.52502 9.14C6.59302 9.344 6.78502 9.482 7.00002 9.482C7.21502 9.482 7.40602 9.344 7.47502 9.14L7.89602 7.877L9.15902 7.456C9.36302 7.388 9.50102 7.197 9.50102 6.982C9.50102 6.767 9.36302 6.576 9.15902 6.508H9.15802Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ImageSparkle;
