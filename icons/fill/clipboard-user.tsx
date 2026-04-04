import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardUser({
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
          d="M12.75 2H12.475C12.352 1.154 11.63 0.5 10.75 0.5H7.25C6.371 0.5 5.648 1.154 5.525 2H5.25C3.733 2 2.5 3.233 2.5 4.75V14.25C2.5 15.767 3.733 17 5.25 17H12.75C14.267 17 15.5 15.767 15.5 14.25V4.75C15.5 3.233 14.267 2 12.75 2ZM7 2.25C7 2.112 7.112 2 7.25 2H10.75C10.888 2 11 2.112 11 2.25V3.25C11 3.388 10.888 3.5 10.75 3.5H7.25C7.112 3.5 7 3.388 7 3.25V2.25ZM9 9C9.82843 9 10.5 8.32843 10.5 7.5C10.5 6.67157 9.82843 6 9 6C8.17157 6 7.5 6.67157 7.5 7.5C7.5 8.32843 8.17157 9 9 9ZM6.899 14H11.1011C11.5078 14 11.8917 13.8014 12.1285 13.4684C12.3609 13.1407 12.4215 12.7208 12.2911 12.3458C11.8023 10.943 10.4801 10.0001 9.0001 10.0001C7.5201 10.0001 6.19791 10.943 5.70961 12.3453C5.57871 12.7207 5.63932 13.1407 5.87172 13.4683C6.10852 13.8013 6.4923 14 6.899 14Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClipboardUser;
