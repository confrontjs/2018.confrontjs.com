import dynamic from 'next/dynamic'

export default dynamic(import('react-siema'), {
    ssr: false,
    loading: () => 0
});
