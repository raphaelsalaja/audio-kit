import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenVideo({
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
          d="M5.7094 14H7.29054L6.46147 16.4872C6.33049 16.8801 5.90575 17.0925 5.51279 16.9615C5.11983 16.8305 4.90746 16.4058 5.03845 16.0128L5.7094 14Z"
          fill={fill}
        />
        <path
          d="M10.7094 14H12.2905L12.9614 16.0128C13.0924 16.4058 12.8801 16.8305 12.4871 16.9615C12.0941 17.0925 11.6694 16.8801 11.5384 16.4872L10.7094 14Z"
          fill={fill}
        />
        <path
          d="M17.6187 1.2881C17.3843 1.1553 17.0938 1.1592 16.8643 1.2988L14.9683 2.4359C14.8138 1.345 13.8832 0.4999 12.75 0.4999H10.25C9.0093 0.5 8 1.5098 8 2.75V4.25C8 5.4902 9.0093 6.5 10.25 6.5H12.75C13.8832 6.5 14.8138 5.6549 14.9683 4.564L16.8633 5.7002C16.982 5.7725 17.1162 5.8086 17.2505 5.8086C17.3775 5.8086 17.5044 5.7764 17.6187 5.7119C17.8541 5.5791 18 5.3291 18 5.0586V3.5V1.9414C18 1.6709 17.854 1.4209 17.6187 1.2881Z"
          fill={fill}
        />
        <path
          d="M6.57524 2C6.5259 2.24239 6.5 2.49321 6.5 2.75V4.25C6.5 6.31841 8.18066 8 10.25 8H12.75C13.8937 8 14.9082 7.48785 15.5911 6.68639L16.0887 6.98472C16.3721 7.15617 16.6836 7.25912 17 7.2946V11.25C17 12.7692 15.7692 14 14.25 14H3.75C2.23079 14 1 12.7692 1 11.25V4.75C1 3.23079 2.23079 2 3.75 2H6.57524Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PresentationScreenVideo;
