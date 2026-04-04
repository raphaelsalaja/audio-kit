import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolDownRight({
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
          d="M14 14.75C13.808 14.75 13.616 14.677 13.47 14.53L3.21999 4.27999C2.92699 3.98699 2.92699 3.51199 3.21999 3.21899C3.51299 2.92599 3.988 2.92599 4.281 3.21899L14.53 13.47C14.823 13.763 14.823 14.238 14.53 14.531C14.384 14.677 14.192 14.751 14 14.751V14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.23901 15C7.95601 15 7.684 14.838 7.557 14.564C7.384 14.188 7.54798 13.742 7.92498 13.569C9.97698 12.623 11.779 12.714 12.995 12.997C12.714 11.779 12.622 9.97799 13.568 7.92599C13.742 7.54999 14.188 7.387 14.562 7.559C14.939 7.732 15.103 8.17799 14.929 8.55399C13.564 11.517 14.84 13.775 14.895 13.87C15.067 14.165 15.018 14.541 14.775 14.782C14.533 15.023 14.161 15.07 13.865 14.895C13.774 14.841 11.517 13.565 8.552 14.932C8.45 14.979 8.34401 15.001 8.23901 15.001V15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolDownRight;
