import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareNut({
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
          d="M13.2501 2H4.75009C3.23349 2 2.00009 3.2334 2.00009 4.75V13.25C2.00009 14.7666 3.23349 16 4.75009 16H13.2501C14.7667 16 16.0001 14.7666 16.0001 13.25V4.75C16.0001 3.2334 14.7667 2 13.2501 2ZM9.00009 10.5C8.17169 10.5 7.50009 9.8286 7.50009 9C7.50009 8.1714 8.17169 7.5 9.00009 7.5C9.82849 7.5 10.5001 8.1714 10.5001 9C10.5001 9.8286 9.82849 10.5 9.00009 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.1285 6.17728L9.879 4.87259C9.337 4.55719 8.6637 4.55758 8.1227 4.87198L5.8727 6.17728C5.3351 6.48928 5.0011 7.06935 5.0011 7.69095V10.3091C5.0011 10.9307 5.3351 11.5108 5.8727 11.8228L8.1222 13.1275C8.3932 13.2852 8.6969 13.3638 9.0006 13.3638C9.3043 13.3638 9.608 13.2853 9.8785 13.1281L12.1285 11.8228C12.6661 11.5108 13.0001 10.9307 13.0001 10.3091V7.69095C13.0001 7.06935 12.6661 6.48928 12.1285 6.17728ZM9.0001 10.5C8.1717 10.5 7.5001 9.82863 7.5001 9.00003C7.5001 8.17143 8.1717 7.50003 9.0001 7.50003C9.8285 7.50003 10.5001 8.17143 10.5001 9.00003C10.5001 9.82863 9.8285 10.5 9.0001 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareNut;
