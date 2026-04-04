import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkSlash({
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
          d="m14.911,3.089c-.298-1.197-1.373-2.089-2.661-2.089h-6.5c-1.517,0-2.75,1.233-2.75,2.75v11.25L14.911,3.089Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4.591,16.591l4.409-2.689,4.834,2.973c.125.083.271.126.416.126.122,0,.243-.029.354-.089.244-.13.396-.385.396-.661V6.182l-10.409,10.409Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2,16.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L15.47,1.47c.293-.293.768-.293,1.061,0s.293.768,0,1.061L2.53,16.53c-.146.146-.338.22-.53.22Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default BookmarkSlash;
