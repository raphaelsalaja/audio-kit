import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonDelivery({
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
          d="M16.775 12.181C16.738 11.519 16.19 11 15.526 11H15.499V10C15.499 8.897 14.602 8 13.499 8C12.396 8 11.499 8.897 11.499 10V11H11.472C10.808 11 10.26 11.519 10.223 12.181L10.029 15.681C10.01 16.022 10.134 16.361 10.369 16.61C10.604 16.859 10.935 17.001 11.277 17.001H15.72C16.062 17.001 16.393 16.858 16.628 16.61C16.863 16.361 16.987 16.023 16.968 15.682L16.775 12.181ZM13 10C13 9.724 13.224 9.5 13.5 9.5C13.776 9.5 14 9.724 14 10V11H13V10Z"
          fill={fill}
        />
        <path
          d="M2 4.5C2 2.84296 3.34296 1.5 5 1.5C6.65704 1.5 8 2.84296 8 4.5C8 6.15704 6.65704 7.5 5 7.5C3.34296 7.5 2 6.15704 2 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.0481 9.96846C10.4615 9.94188 10.775 9.58525 10.7485 9.17189C10.7219 8.75853 10.3652 8.44497 9.95189 8.47155L3.57366 8.88156C2.12635 8.97502 1 10.1752 1 11.626V16.25C1 16.6642 1.33579 17 1.75 17L6.75 17C7.16422 17 7.5 16.6642 7.5 16.25V10.1323L10.0481 9.96846Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.04472 5.019C2.01532 4.85042 2 4.677 2 4.5C2 2.84296 3.34296 1.5 5 1.5C6.16162 1.5 7.16889 2.15997 7.66736 3.12546L9.44804 3.0018C9.86125 2.97311 10.2195 3.28482 10.2482 3.69804C10.2769 4.11126 9.96517 4.4695 9.55195 4.4982C7.04956 4.67208 4.5473 4.84795 2.04472 5.019Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PersonDelivery;
