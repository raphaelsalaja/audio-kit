import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcasePointer({
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
          d="M11.75,5.5c-.414,0-.75-.336-.75-.75V2.25c0-.138-.112-.25-.25-.25h-3.5c-.138,0-.25,.112-.25,.25v2.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V2.25c0-.965,.785-1.75,1.75-1.75h3.5c.965,0,1.75,.785,1.75,1.75v2.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M8.654,11.898c-.341-.936-.116-1.954,.587-2.657,.48-.479,1.114-.742,1.785-.742,.296,0,.589,.052,.869,.154l5.104,1.865v-3.768c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.517,1.233,2.75,2.75,2.75h6.403l-1.498-4.102Z"
          fill={fill}
        />
        <path
          d="M17.324,12.233l-5.94-2.17h0c-.38-.138-.794-.047-1.081,.239-.286,.286-.378,.701-.239,1.082l2.17,5.94c.148,.407,.536,.676,.967,.676h.021c.44-.009,.826-.296,.96-.716l.752-2.351,2.352-.752c.419-.134,.706-.52,.715-.96,.008-.44-.263-.837-.676-.988Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SuitcasePointer;
