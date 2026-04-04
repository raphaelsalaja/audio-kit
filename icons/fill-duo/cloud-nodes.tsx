import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudNodes({
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
          d="M14.146 5.327C13.704 2.864 11.535 1 9 1C6.105 1 3.75 3.355 3.75 6.25C3.75 6.378 3.755 6.508 3.767 6.64C2.163 7.071 1 8.525 1 10.25C1 12.318 2.682 14 4.75 14H12.5C14.981 14 17 11.981 17 9.5C17 7.646 15.85 5.997 14.146 5.327Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8 12.6382V9.25C8 8.8359 7.6641 8.5 7.25 8.5C6.8359 8.5 6.5 8.8359 6.5 9.25V12.6382C5.6291 12.9487 5 13.7737 5 14.75C5 15.9907 6.0098 17 7.25 17C8.4902 17 9.5 15.9907 9.5 14.75C9.5 13.7737 8.8709 12.9487 8 12.6382Z"
          fill={fill}
        />
        <path
          d="M13.75 11.5C13.4036 11.5 13.0792 11.5852 12.7858 11.7256L11.5743 10.5132C11.5264 10.4653 11.5001 10.4024 11.5001 10.336V9.25012C11.5001 8.83602 11.1642 8.50012 10.7501 8.50012C10.336 8.50012 10.0001 8.83602 10.0001 9.25012V10.336C10.0001 10.8023 10.1817 11.2418 10.5128 11.5733L11.7254 12.7864C11.5851 13.0796 11.5001 13.4038 11.5001 13.75C11.5001 14.9907 12.5099 16 13.7501 16C14.9903 16 16.0001 14.9907 16.0001 13.75C16.0001 12.5093 14.9902 11.5 13.75 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudNodes;
