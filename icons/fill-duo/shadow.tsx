import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shadow({
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
          d="M3 8.03548C3 4.72143 5.68596 2.03548 9 2.03548C12.314 2.03548 15 4.72143 15 8.03548C15 11.3495 12.314 14.0355 9 14.0355C5.68596 14.0355 3 11.3495 3 8.03548Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.55062 12.0611C4.0095 12.2208 3.52781 12.4149 3.1364 12.6435C2.5995 12.957 2 13.4779 2 14.25C2 14.8678 2.39087 15.3255 2.78863 15.6264C3.19866 15.9366 3.74455 16.1839 4.35187 16.3783C5.57507 16.7698 7.21828 17 9 17C10.7817 17 12.4249 16.7698 13.6481 16.3783C14.2555 16.1839 14.8013 15.9366 15.2114 15.6264C15.6091 15.3255 16 14.8678 16 14.25C16 13.4779 15.4005 12.957 14.8636 12.6435C14.4722 12.4149 13.9905 12.2208 13.4494 12.0611C12.3516 13.2738 10.7648 14.0355 9 14.0355C7.23516 14.0355 5.64844 13.2738 4.55062 12.0611Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Shadow;
