import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Invoice({
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
          d="M5.25 1C3.73079 1 2.5 2.23079 2.5 3.75V16.25C2.5 16.5185 2.64358 16.7666 2.87645 16.9004C3.10932 17.0341 3.39594 17.0331 3.6279 16.8978L6.23303 15.3782L8.59734 16.8827C8.84302 17.0391 9.15698 17.0391 9.40266 16.8827L11.767 15.3782L14.3721 16.8978C14.6041 17.0331 14.8907 17.0341 15.1235 16.9004C15.3564 16.7666 15.5 16.5185 15.5 16.25V3.75C15.5 2.23079 14.2692 1 12.75 1H5.25ZM6.25 10C5.83579 10 5.5 10.3358 5.5 10.75C5.5 11.1642 5.83579 11.5 6.25 11.5H8.75C9.16421 11.5 9.5 11.1642 9.5 10.75C9.5 10.3358 9.16421 10 8.75 10H6.25ZM10.5 10.75C10.5 10.3358 10.8358 10 11.25 10H11.75C12.1642 10 12.5 10.3358 12.5 10.75C12.5 11.1642 12.1642 11.5 11.75 11.5H11.25C10.8358 11.5 10.5 11.1642 10.5 10.75ZM9 4C7.89579 4 7 4.89579 7 6C7 7.10421 7.89579 8 9 8C10.1042 8 11 7.10421 11 6C11 4.89579 10.1042 4 9 4Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Invoice;
