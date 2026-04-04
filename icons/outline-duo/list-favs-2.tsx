import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListFavs2({
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
          d="M8.25 9H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 3.75H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 14.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.804 7.93L4.617 7.758L4.086 6.682C3.961 6.426 3.539 6.426 3.414 6.682L2.883 7.758L1.696 7.93C1.554 7.951 1.437 8.05 1.393 8.185C1.349 8.32 1.385 8.47 1.488 8.569L2.346 9.406L2.144 10.588C2.12 10.729 2.177 10.871 2.292 10.955C2.407 11.039 2.561 11.051 2.688 10.984L3.75 10.426L4.812 10.984C4.868 11.013 4.927 11.027 4.987 11.027C5.065 11.027 5.142 11.003 5.208 10.955C5.323 10.871 5.381 10.729 5.356 10.588L5.154 9.406L6.012 8.569C6.115 8.469 6.151 8.32 6.107 8.185C6.063 8.05 5.946 7.95 5.804 7.93Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.34701 4.157L2.14501 5.339C2.12101 5.48 2.17801 5.622 2.29301 5.706C2.40801 5.79 2.56201 5.802 2.68901 5.735L3.75101 5.177L4.81301 5.735C4.86901 5.764 4.92801 5.778 4.98801 5.778C5.06601 5.778 5.14301 5.754 5.20901 5.706C5.32401 5.622 5.38201 5.48 5.35701 5.339L5.15501 4.157L6.01301 3.32C6.11601 3.22 6.15201 3.071 6.10801 2.936C6.06401 2.801 5.94701 2.701 5.80501 2.681L4.61801 2.509L4.08701 1.433C3.96201 1.177 3.54001 1.177 3.41501 1.433L2.88401 2.509L1.69701 2.681C1.55501 2.702 1.43801 2.801 1.39401 2.936C1.35001 3.071 1.38601 3.221 1.48901 3.32L2.34701 4.157Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.804 13.18L4.617 13.008L4.086 11.932C3.961 11.676 3.539 11.676 3.414 11.932L2.883 13.008L1.696 13.18C1.554 13.201 1.437 13.3 1.393 13.435C1.349 13.57 1.385 13.72 1.488 13.819L2.346 14.656L2.144 15.838C2.12 15.979 2.177 16.121 2.292 16.205C2.407 16.289 2.561 16.3 2.688 16.234L3.75 15.676L4.812 16.234C4.868 16.263 4.927 16.277 4.987 16.277C5.065 16.277 5.142 16.253 5.208 16.205C5.323 16.121 5.381 15.979 5.356 15.838L5.154 14.656L6.012 13.819C6.115 13.719 6.151 13.57 6.107 13.435C6.063 13.3 5.946 13.2 5.804 13.18Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ListFavs2;
